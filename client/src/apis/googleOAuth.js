export default()=>{
    window.gapi.load("client:auth2", () => {
        window.gapi.client
          .init({
            clientId:
              "957021161458-l697085bd75434r8k8sipqhu8424csom.apps.googleusercontent.com",
            scope: "email"
          })
          // Ceka odgovor od servera
          .then(() => {
            //Daje instancu ka servisu
            this.auth = window.gapi.auth2.getAuthInstance();
            console.log(this.auth);
            return this.auth;

          });
      });
}