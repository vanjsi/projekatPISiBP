Opis projekta i njegovih funkcionalnosti
	
Projekat obuhvata izradu web aplikacije koja predstavlja elektronske novine. Projekat je izradjen koriscenjem MERN tehnologije(MongoDb,Express,React,Node.js). Neke od biblioteka koje su koriscene u okviru react-a su react-router-dom za rutiranje u React aplikacijama, react-icons za ukljucivanje komponenata, axios za izvrsavanje http zahteva iz react aplikacija. Koricen je i Tailwind CSS koji omogucava stilizovanje elemenata koriscenjem vise malih klasa direktno u html-u. Neke od stavki koriscenih u okviru backend-a su express koji olaksava izgradnju web aplikacija i API-a, mongoose biblioteka za bazu, bcrypt za sakrivanje lozinki, jsonwebtoken za verifikaciju, multer za dodavanje slika. 

Moja web aplikacija funkcionise po sledecem principu. Na pocetnoj stranici se nalaze same objave koje obuhvataju sliku, tekst, kategoriju, kao i opciju komentarisanja objava i lajkovanja komentara. Svaka objava ima i datum  i vreme kad je nastala. Takodje postoji opcija pretrage objava po naslovu i opcija za prijavu postojecih korisnika, kao i opcija za registrovanje novih korisnika, ovo se sve nalazi u okviru Navbara. U okviru Footera postoje odredjene informacije i linkovi o samom sajtu.

Odmah na pocetnoj strani korsnik ima mogucnost da procita celu objavu, kao i da lajkuje komentar, a nakon logovanja se dobijaju jos neke opcije.

Kada se korisnik uloguje ima mogucnost da napise novu objavu, da postavlja komentare, lajkuje. Takodje postoji opcija editovanja i brisanja postojecih objava. Samo korisnik koji je napisao odredjenu objavu ili odredjeni komentar moze da  vrsi izmene u vidu azuriranja ili brisanja svoje objave, dok ostale objave moze samo da cita ili komentarise, lajkuje, ali ne moze da ih menja. Kada se ulogujemo, u okviru menija, imamo opciju ,pored pisanja nove objave, profil koja prikazuje podatke o korisniku, kao sto su korisnicko ime i email korisnika, kao i opciju odjavljivanja koja vraca korisnika na pocetnu stranu.  Postoji i opcija azuriranja i brisanja podataka korisnika uz potvrdu da je azuiranja uspesno obavljeno. Takodje u okviru komentara, pored samog lajkovaja/dislajkovanja imamo i opciju brojenja tih lajkova/dislajkova.
Sajt, odnosno prikaz sajta, prilagodjen je raznim velicinama ekrana i shodno rezoluciji ekrana se prilagodjava sam prikaz sajta.

Takodje, u okviru projekta koriscen je i thunder client kako bi se testirali odredjeni delovi koda kao sto su kreiranje, brisanje, azuriranje objava,dodavanje i upravljanje korisnicima, kao i pracenje login i logout funkcija.

