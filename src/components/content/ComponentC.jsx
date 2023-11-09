import PropTypes from 'prop-types';

const ComponentC = ({title}) => {
  return(
    <p className='w-full text-center'>{title } was not project requirement</p>
  );
}

ComponentC.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ComponentC;