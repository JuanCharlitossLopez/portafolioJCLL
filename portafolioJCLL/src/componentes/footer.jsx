import logo from '../assets/logoJC.jpg'

const stylo = {
  estiloFooter: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#1680a4",
  },
};
export const Footer = () => {
  return (
    <>
      <footer style={stylo.estiloFooter}>
        <hr style={{color:'white'}}/>
        <p style={{ background: "none"}}> <img src={logo} width={50} alt="ERROR" style={{marginRight:'2rem', markerEnd:'3rem'}}/>
          © Copyright <strong>Create by Juan Carlos López León</strong>
        </p>
      </footer>
    </>
  );
};
