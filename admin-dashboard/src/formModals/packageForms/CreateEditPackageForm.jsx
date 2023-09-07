import {DisabledButton, LoadingButton, SubmitButton} from '../../components/elements/Buttons';
import {useEffect, useState} from 'react';
import toastr from 'toastr';
import {packageService} from '../../services/package-services';

export const CreateEditPackageForm = ({isEditTrue, isEdit, selectedUser, fetchData}) => {
  const title = isEditTrue ? 'Update Package' : 'Create Package';

  const initialFormFields = () => {
    if (isEdit) {
      return {
        name: selectedUser?.name || '',
        amount: selectedUser?.amount || '',
        dailyRoi: selectedUser?.dailyRoi || '',
        profitRate: selectedUser?.profitRate || '',
        lossRate: selectedUser?.lossRate || '',
        dailyLoss: selectedUser?.dailyLoss || '',
        referalBonus: selectedUser?.referalBonus || '',
        minDeposit: selectedUser?.minDeposit || '',
        maxDeposit: selectedUser?.maxDeposit || '',
        totalPercentageReturn: selectedUser?.totalPercentageReturn || '',
        duration: selectedUser?.duration || '',
      };
    } else {
      return {
        name: '',
        amount: '',
        dailyRoi: '',
        profitRate: '',
        lossRate: '',
        dailyLoss: '',
        referalBonus: '',
        minDeposit: '',
        maxDeposit: '',
        totalPercentageReturn: '',
        duration: '',
      };
    }
  };

  const [submitForm, setSubmitForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    ...initialFormFields,
    errors: initialFormFields,
  });

  useEffect(() => {
    if (selectedUser) {
      const initialErrors = {};
      Object.keys(initialFormFields()).forEach((key) => {
        initialErrors[key] = '';
      });
      setFormValues({
        ...initialFormFields(),
        errors: initialErrors,
      });
    }
  }, [selectedUser]);

  const disableForm = () => {
    const newValues = {...formValues};
    let isError = false;
    for (let val of Object.values(newValues)) {
      if (val === '') {
        isError = true;
      }
    }
    if (isError && submitForm) {
      return true;
    }

    if (isError && !submitForm) {
      return true;
    }
    if (!isError && !submitForm) {
      return false;
    }
  };

  const validateForm = (name, errors, value) => {
    switch (name) {
      case 'name':
        errors.name = '';
        if (!value) {
          errors.name = 'package name is required to procced!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.name;

      case 'amount':
        errors.amount = '';
        if (!value) {
          errors.amount = 'package amount is required!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.amount;

      case 'dailyRoi':
        errors.dailyRoi = '';
        if (value.length && value.length <= 0) {
          errors.dailyRoi = 'this value is required!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.dailyRoi;

      case 'profitRate':
        errors.profitRate = '';
        if (value.length && value.length <= 0) {
          errors.profitRate = 'this value is required!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.profitRate;

      case 'lossRate':
        errors.lossRate = '';
        if (value.length && value.length <= 0) {
          errors.lossRate = 'this value is required!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.lossRate;

      case 'dailyLoss':
        errors.dailyLoss = '';
        if (value.length && value.length <= 0) {
          errors.dailyLoss = 'this value is required!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.dailyLoss;

      case 'referalBonus':
        errors.referalBonus = '';
        if (value.length && value.length <= 0) {
          errors.referalBonus = 'this value is required!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.referalBonus;

      case 'minDeposit':
        errors.minDeposit = '';
        if (value.length && value.length <= 0) {
          errors.minDeposit = 'this value is required!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.minDeposit;

      case 'maxDeposit':
        errors.maxDeposit = '';
        if (value.length && value.length <= 0) {
          errors.maxDeposit = 'this value is required!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.maxDeposit;

      case 'totalPercentageReturn':
        errors.totalPercentageReturn = '';
        if (value.length && value.length <= 0) {
          errors.totalPercentageReturn = 'this value is required!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.totalPercentageReturn;

      case 'duration':
        errors.duration = '';
        if (value.length && value.length <= 0) {
          errors.duration = 'this value is required!';
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.duration;

      default:
        setSubmitForm(false);
        break;
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    let {name, value} = event.target;
    let errors = formValues.errors;
    validateForm(name, errors, value);
    setFormValues((prevState) => {
      return {
        ...prevState,
        errors,
        [name]: value,
      };
    });
    for (let val of Object.values(formValues.errors)) {
      if (val !== '') {
        setSubmitForm(false);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const {
      name,
      amount,
      dailyRoi,
      profitRate,
      lossRate,
      dailyLoss,
      referalBonus,
      minDeposit,
      maxDeposit,
      totalPercentageReturn,
      duration,
    } = formValues;

    if (selectedUser._id) {
      // If selectedUser has an _id, it means updating an existing package
      const userId = selectedUser._id;
      const response = await packageService.updatePackages(userId, {
        name,
        amount,
        dailyRoi,
        profitRate,
        lossRate,
        dailyLoss,
        referalBonus,
        minDeposit,
        maxDeposit,
        totalPercentageReturn,
        duration,
      });

      if (response.status !== 'success') {
        toastr.error('Error Handling Request');
      } else {
        window.bootstrap.Modal.getInstance(document.getElementById('editBundle')).hide();
        toastr.success('Package updated successfully!');

        fetchData();
      }
    } else {
      // If selectedUser does not have an _id, it means creating a new package
      const response = await packageService.CreatePackages({
        name,
        amount,
        dailyRoi,
        profitRate,
        lossRate,
        dailyLoss,
        referalBonus,
        minDeposit,
        maxDeposit,
        totalPercentageReturn,
        duration,
      });

      if (response.status !== 'success') {
        toastr.error('Error Handling Request');
      } else {
        window.bootstrap.Modal.getInstance(document.getElementById('editBundle')).hide();
        toastr.success('Investment account created successfully!');

        fetchData();
      }
    }

    setLoading(false);
  };

  return (
    <div
      id="editBundle"
      className="modal fade"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="editBundleTitle"
      aria-hidden="true"
      style={{background: 'transparent'}}>
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="editBundleTitle" style={{color: 'rgb(7,182,212)'}}>
              {title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="card">
              <div className="card-body">
                <form>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Package Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="name"
                        onChange={handleChange}
                        value={formValues.name}
                        name="name"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Amount
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="amount"
                        onChange={handleChange}
                        value={formValues.amount}
                        name="amount"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Daily Returns On Investment(ROI)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="dailyRoi"
                        onChange={handleChange}
                        value={formValues.dailyRoi}
                        name="dailyRoi"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Profit Rate(%)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="profitRate"
                        onChange={handleChange}
                        value={formValues.profitRate}
                        name="profitRate"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Loss Rate(%)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="lossRate"
                        onChange={handleChange}
                        value={formValues.lossRate}
                        name="lossRate"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Daily Loss
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="dailyLoss"
                        onChange={handleChange}
                        value={formValues.dailyLoss}
                        name="dailyLoss"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Referal Bonus
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="referalBonus"
                        onChange={handleChange}
                        value={formValues.referalBonus}
                        name="referalBonus"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Minimum Deposit
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="minDeposit"
                        onChange={handleChange}
                        value={formValues.minDeposit}
                        name="minDeposit"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Maximum Deposit
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="maxDeposit"
                        onChange={handleChange}
                        value={formValues.maxDeposit}
                        name="maxDeposit"
                      />
                    </div>
                  </div>

                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Total Investment Returns(%)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="totalPercentageReturn"
                        onChange={handleChange}
                        value={formValues.totalPercentageReturn}
                        name="totalPercentageReturn"
                      />
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">
                        Duration(Number of Days)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="duration"
                        onChange={handleChange}
                        value={formValues.duration}
                        name="duration"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="center-container">
            <div class="modal-footer">
              {disableForm() ? (
                <DisabledButton title={'Submit'} />
              ) : !loading ? (
                <SubmitButton onClick={handleSubmit} title={'Continue'} />
              ) : (
                <LoadingButton />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
