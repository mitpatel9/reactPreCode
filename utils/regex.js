export const regex = {
  PassWordCheak: (pass) => {
    if (/^(?=.*\d)(?=.*\W+)(?=.*[A-Z])(?=.*[a-z]).{8,}$/.test(pass)) {
      return true;
    } else {
      return false;
    }
  },

  EmailCheak:(email)=>{
    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test()){
        return true;
    } else {
      return false;
    }

  }
};
