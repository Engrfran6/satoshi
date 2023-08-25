import { DisabledButton, LoadingButton, SubmitButton } from '../../components/elements/Buttons';
import { useEffect, useState } from 'react';
import { CampaignService } from '../../services/campaign-service';
import toastr from 'toastr'
import Select from 'react-select';

export const EditCampaignModal = ({selectedCampaign}) => {
  const initialFormFields = {
    type: selectedCampaign?.type,
    description: selectedCampaign?.description,
    title: selectedCampaign?.title,
    body: selectedCampaign?.body,
  };

  const [submitForm, setSubmitForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    ...initialFormFields,
    errors: initialFormFields,
  });

  const [selectedOption, setSelectedOption] = useState(selectedCampaign?.type);
  const handleClick = async (data) => {
    const { value } = data
    setSelectedOption(value)
  }

  const options = [
    { value: 'image', label: 'Image' },
    { value: 'text', label: 'Text' },
    { value: 'html', label: 'Html' },
    { value: 'video', label: 'Video' },
  ];

  useEffect(() => {
    if (selectedCampaign) {
      const initialErrors = {};
      Object.keys(initialFormFields).forEach((key) => {
        initialErrors[key] = '';
      });
      setFormValues({
        ...initialFormFields, 
        errors: initialErrors })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCampaign]);

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
      case "description":
        errors.description = "";
        if (value.length && value.length <= 3) {
          errors.description = "description must be more than 3 characters long!";
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.description;

      case "title":
        errors.title = "";
        if (value.length && value.length <= 3) {
          errors.title = "Title must be more than 3 characters long!";
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.title;

      case "body":
        errors.description = "";
        if (value.length && value.length <= 3) {
          errors.body = "Body must be more than 3 characters long!";
          setSubmitForm(false);
        } else {
          setSubmitForm(true);
        }
        return errors.body;

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
    const { body, description,title } = formValues;
    const response = await 
    CampaignService.updateCampaign({
      body, description,title,selectedOption
    })
    const { success } = response
    if (!success) {
      toastr.error('Error Handling Request');
      setTimeout(() => setLoading(false), 1000)
    } else {
      window.bootstrap.Modal.getInstance(document.getElementById("editCampaign")).hide();
      toastr.success('Successful Updated Campaign');
      setTimeout(() => setLoading(false), 1000)
    }
  };

  return (
    <div
        id="editCampaign"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="editBundleTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="editBundleTitle"
              >
                Edit Campaign
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
                        <Select
                          defaultValue={{ label: 'Type', value: selectedOption }}
                          onChange={ handleClick }
                          options={ options }
                          className={'select-react'}
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Title"
                          onChange={handleChange}
                          value={formValues.title}
                          name='title'
                        />
                      </div>
                    </div>

                    <br/>
                    <div className="row">
                      <div className="col">
                      <textarea class="form-control"
                          type="text"
                          rows="4"
                          cols="4"
                          className="form-control"
                          placeholder="Description"
                          onChange={handleChange}
                          value={formValues.description}
                          name='description'
                        >
                        </textarea>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col">
                      <textarea class="form-control"
                          type="text"
                          rows="10"
                          cols="10"
                          className="form-control"
                          placeholder="Body"
                          onChange={handleChange}
                          value={formValues.body}
                          name='body'
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