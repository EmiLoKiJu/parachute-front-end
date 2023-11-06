import PropTypes from 'prop-types';

export default function ComponentC({title}) {
  return(
    <p className='w-full text-center'>{title } was not project requirement</p>
  );
}

ComponentC.propTypes = {
  title: PropTypes.string.isRequired,
}
