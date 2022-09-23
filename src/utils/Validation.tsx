

export const validateForm = ():boolean => {

      const need_validate:any = document.querySelectorAll('.need-validate  input');

      for (let i = 0; i < need_validate.length; i++) {
           if ( need_validate[i].value == '' ) {
               return false;
           }        
      }

      return true;
}