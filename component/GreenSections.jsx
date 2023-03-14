const GreenSections = ({ c }) => {
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
        Shades of Green
      </div>
      <div style={{ display: "flex", flexDirecttion: "row", flexWrap: "wrap" }}>
        {c.map((item, index) => {
          return (
            <>
              <div
                onClick={() => {
                  navigator.clipboard.writeText(item);
                }}
              >
                <div
                  className="box_hover"
                  style={{
                    height: 130,
                    width: 130,
                    backgroundColor: `${item}`,
                    marginTop: 48,
                    marginLeft: 42,
                    padding: 35,
                    transition: "transform .2s",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    borderRadius: 10,
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
            </>
          );
        })}
      </div>
    </>
  );
};

export default GreenSections;
