function Avatar(props) {
  return (
    <>
      <div className="p-4 m-2 rounded-xl bg-white shadow-xl">
        <div>{props.type}</div>
        <div>{props.info}</div>
        <div>{props.url}</div>
        <div>{props.alt}</div>
        <div>{props.rating}</div>
        <div>{props.likes}</div>
        <div>{props.price}</div>
        <div>{props.fits}</div>
        <div>{props.additionalInfo}</div>
      </div>
    </>
  );
}

export default Avatar;
