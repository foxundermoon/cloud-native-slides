import createTheme from "../../createTheme";

const colors = {
  primary: "white",
  secondary: "#1F2022", // almost black w/ blueish tint
  tertiary: "#fc300f", // bright red
  quaternary: "#CECECE" // pale gray
};

const theme = createTheme(colors, {
  primary: "Montserrat",
  secondary: "Helvetica"
}, {
  progress: {
    pacmanTop: {
      background: colors.quaternary
    },
    pacmanBottom: {
      background: colors.quaternary
    },
    point: {
      borderColor: colors.quaternary
    }
  },
  components: {
    heading: {
      h1: {
        fontSize: '4rem',
      },
      h2: {
        fontSize: '3.5rem',
      },
      h3: {
        fontSize: '3rem',
      },
      h4: {
        fontSize: '2.5rem',
      },
      h5: {
        fontSize: '2rem',
      },
      h6: {
        fontSize: '1.5rem',
      }
    },
    codePane: {
      fontSize: '2rem'
    }
  }
});

export default theme;