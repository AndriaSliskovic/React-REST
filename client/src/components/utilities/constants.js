export const profilUsera=(profil)=>{
    return{
        imePrezime:profil.getName(),
        prezime:profil.getFamilyName(),
        email:profil.getEmail(),
        ime:profil.getGivenName(),
        // image:getImageUrl()
    }
    
  };