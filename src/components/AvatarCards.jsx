/* eslint-disable react/prop-types */
function Avatar(props) {
  return (
    <>
      <div>{props.type}</div>
      <div>{props.info}</div>
      <div>{props.url}</div>
      <div>{props.alt}</div>
      <div>{props.rating}</div>
      <div>{props.likes}</div>
      <div>{props.price}</div>
      <div>{props.fits}</div>
      <div>{props.additionalInfo}</div>
    </>
  );
}

export default Avatar;
