import PropTypes from 'prop-types'




const PageTitle = ({title}) => {
  return (
    <div className='flex items-center justify-center'>
  
      <h2 className='text-4xl tracking-wide mb-4 font-semibold text-zen-charcoal font-yujiMai mt-12 '>
        {title}
      </h2>
 
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
