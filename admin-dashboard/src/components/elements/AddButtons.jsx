export const AddButtons = ({title}) => {
  return (
    <div>
      <small
        style={{
          backgroundColor: 'transparent',
          padding: '.5rem 1rem',
          color: 'rgb(7,182,212)',
          border: '1px solid rgb(7,182,212)',
          fontSize: '1.2rem',
          borderRadius: '.5rem',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}>
        <i class="fa fa-plus-square" aria-hidden="true" style={{paddingRight: '.6rem'}}></i>
        {title}
      </small>
    </div>
  );
};
