import PropTypes from 'prop-types'




const PageTitle = ({title}) => {
  return (
    <div className='text-center drop-shadow-2xl '>
      <h2 className='text-4xl tracking-wide mb-4 font-semibold text-zen-charcoal font-yujiMai mt-12 '>
        {title}
      </h2>
      {/* border */}
      <div className='border-[1px] border-gray-900 w-72 mx-auto  border-opacity-45 mb-[1.5px] rounded-lg'></div>
      <div className='border-[1px] border-gray-900 w-96 mx-auto border-opacity-45'></div>
      <div className='border-[1px] border-gray-900 w-72 mx-auto  border-opacity-45 mt-[1.4px] rounded-lg'></div>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
