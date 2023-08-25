
import Calendar from 'react-calendar';

export const CalendarModal = () => {
  return (
    <div
        id="calModal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenteredScrollableTitle"
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
                id="exampleModalCenteredScrollableTitle"
              >
                Modal title
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
                <Calendar selectRange={true}/>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
  )
}