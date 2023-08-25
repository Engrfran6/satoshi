import { DisabledButton, LoadingButton, SubmitButton } from '../components/elements/Buttons';
import { useEffect, useState } from 'react';
import { bundleService } from '../services/bundle-service';
import toastr from 'toastr'

export const EditBundleModal = ({selectedBundle}) => {
  const initialFormFields = {
    name: selectedBundle?.name,
    amount: selectedBundle?.amount,
    description: selectedBundle?.description,
    additionalCharge: selectedBundle?.additionalCharge,
    type: selectedBundle?.type,
    value: selectedBundle?.value,
  };

  const [submitForm, setSubmitForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    ...initialFormFields,
    errors: initialFormFields,
  });

  useEffect(() => {
    if (selectedBundle) {
      const initialErrors = {};
      Object.keys(initialFormFields).forEach((key) => {
        initialErrors[key] = '';
      });
      setFormValues({
        ...initialFormFields, 
        errors: initialErrors })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBundle]);

  const disableForm = () => {
    const newValues = { ...formValues };
    let isError = false;
    for (let val of Object.values(newValues)) {
      if (val === "") {
        isError = true;
      }
    }
    if (isError && submitForm) {
      return true;
    }
    if (!isError && !submitForm) {
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
      case "name":
        errors.name = "";
        if (value.length && value.length <= 3) {
          errors.name = "name of bundle must be more than 3 characters long!";
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.name;

      case "amount":
        errors.amount = "";
        if (value.length && value.length <= 3) {
          errors.amount = "amount of bundle must be more than 3 characters long!";
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.amount;

      case "description":
        errors.description = "";
        if (value.length && value.length <= 10) {
          errors.description = "description of bundle must be more than 10 characters long!";
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.description;
        
        case "additionalCharge":
          errors.additionalCharge = "";
          if (value.length && value.length <= 3) {
            errors.additionalCharge = "additional Charge of bundle must be more than 3 characters long!";
            setSubmitForm(false);
          } else {
            setSubmitForm(true);
          }
          return errors.additionalCharge;  
        
        case "type":
          errors.type = "";
          if (value.length && value.length <= 3) {
            errors.type = "type of bundle must be more than 3 characters long!";
            setSubmitForm(false);
          } else {
            setSubmitForm(true);
          }
          return errors.type; 
          
          case "value":
            errors.value = "";
            if (value.length && value.length <= 3) {
              errors.value = "value of bundle must be more than 3 characters long!";
              setSubmitForm(false);
            } else {
              setSubmitForm(true);
            }
            return errors.value;   
    
        default:
        setSubmitForm(false);
        break;
    }
  };

  const handleChange = (event) => {
      event.preventDefault();
      let { name, value } = event.target;
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
        if (val !== "") {
          setSubmitForm(false);
        }
      }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { name, amount, description,additionalCharge, value, type } = formValues;
    const response = await 
    bundleService.updateBundle({
      _id: selectedBundle._id,
      name,
      amount, 
      description: Array.isArray(description) ? description : description.split(','),
      additionalCharge,
      value,
      type,
    })
    const { success } = response
    if (!success) {
      toastr.error('Error Handling Request');
      setTimeout(() => setLoading(false), 1000)
    } else {
      window.bootstrap.Modal.getInstance(document.getElementById("editBundle")).hide();
      toastr.success('Successful Updated Bundle');
      setTimeout(() => setLoading(false), 1000)
    }
  };
  return (
    <div
        id="editBundle"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="editBundleTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="editBundleTitle"
              >
                Edit Bundle
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="card-body">
                  <form>
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name Of Bundle" 
                          onChange={handleChange}
                          value={ formValues.name }
                          name='name'
                        />
                      </div>
                      <div className="col">
                        <label class="form-label" for="exampleInputmonth">Amount</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amount Of Bundle" 
                          onChange={handleChange}
                          value={ formValues.amount }
                          name='amount'
                        />
                      </div>

                      <div className="col">
                        <label class="form-label" for="exampleInputmonth">additional charge</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Amount Of Bundle" 
                          onChange={handleChange}
                          value={ formValues.additionalCharge }
                          name='additionalCharge'
                        />
                        <br/>
                        <br/>
                      </div>

                      
                  </div>
                  <div className="row">
                    <div className="col">
                      <label class="form-label" for="exampleInputmonth">Type</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="type of bundle"
                          onChange={handleChange}
                          value={formValues.type}
                          name='type'
                        />
                      </div>
                      <div className="col">
                        <label class="form-label" for="exampleInputmonth">Value</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Value" 
                          onChange={handleChange}
                          value={ formValues.value }
                          name='value'
                        />
                      </div>

                      <div className="col-lg-12">
                      <br/>
                        <label class="form-label" for="exampleInputmonth">Description</label>
                        <textarea class="form-control"
                          id="exampleFormControlTextarea1"
                          rows="2" data-lt-tmp-id="lt-616928" 
                          spellcheck="false" 
                          data-gramm="false"
                          placeholder="description"
                          onChange={handleChange}
                          value={ formValues.description }
                          name='description'
                        >
                      </textarea>
                      </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="center-container">
              <div class="modal-footer">
                {
                  disableForm() ? (
                    <DisabledButton title={'Submit'}/>
                  ) : !loading ? (
                    <SubmitButton onClick={ handleSubmit } />
                  ) : (
                    <LoadingButton />
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}