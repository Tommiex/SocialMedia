import "./css/picture.css";
function Picture() {
  function picSize() {
    return <div className={`pic${picSize}`}></div>;
  }
  return (
    <div className="picGroup">
      <div className="pic small"><p>sss</p></div>
      <div className="pic medium"><p>ssss</p></div>
      <div className="pic large"><p>sssss</p></div>
    </div>
  );
}
export default Picture;
