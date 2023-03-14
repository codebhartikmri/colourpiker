const BlueSections = ({ b }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          fontSize: 70,
          marginTop: 44,
          marginLeft: 42,
        }}
      >
        Shades of Blue
      </div>
      <div style={{ display: "flex", flexDirecttion: "row", flexWrap: "wrap" }}>
        {b.map((item, index) => {
          return (
            <div
              onClick={() => {
                navigator.clipboard.writeText(item);
              }}
            >
              <div
                className="box_hover"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 130,
                  width: 130,
                  borderRadius: 10,
                  padding: 35,
                  backgroundColor: `${item}`,
                  transition: "transform .2s",
                  marginTop: 48,
                  marginLeft: 42,
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "white",
                  marginLeft: 42,
                  marginTop: 28,
                  borderRadius: 10,

                  padding: 20,
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  fontSize: 20,
                }}
              >
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default BlueSections;
