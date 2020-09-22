import React from 'react';
import "./CSS/Home.css";
import Product from './Product.js';

function Home(){
	return(
		<div className="home">
			 <div className="home_image">
			 	<p>SOAL <br /><span>ECOMMERCE !</span></p>
			 </div>
			 <div className="home_row">
			 	<Product
				 	id="1234342424"
				 	title = "Smart Phone "
				 	price = {12000}
				 	rating = {3}
				 	image = "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1589398875141-QL8O2W7QS3B4MZPFWHJV/ke17ZwdGBToddI8pDm48kBVDUY_ojHUJPbTAKvjNhBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmV5_8-bAHr7cY_ioNsJS_wbCc47fY_dUiPbsewqOAk2CqqlDyATm2OxkJ1_5B47U/image-asset.jpeg?format=300w"
			 	/>
			 	<Product
				 	id="1234342424"
				 	title = "Mi Smart Tv "
				 	price = {36900}
				 	rating = {4}
				 	image = "https://images.samsung.com/is/image/samsung/in-uhd-tv-tue60f-ua43tue60fkxxl-frontblack-231853123?$PD_GALLERY_L_SHOP_JPG"
			 	/>
			 </div>

			 <div className="home_row">
			 	<Product
				 	id="1234342424"
				 	title = "Echo plus (2nd Gen)- Premium Sound "
				 	price = {9999}
				 	rating = {4}
				 	image = "https://images-na.ssl-images-amazon.com/images/I/51ZiCYNeccL._SY300_.jpg"
			 	/>
			 	<Product
				 	id="1234342424"
				 	title = "Sony Smart Camera With Different Lens"
				 	 price = {14000}
				 	rating = {4}
				 	image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSv8ToexTe3NOUeewpoXUJg78guPXhjY-oxTA&usqp=CAU"
			 	/>
			 	<Product
				 	id="1234342424"
				 	title = "Nariko 2 Door Wardrobe with 2 Drawers in Wenge Finish "
				 	price = {19000}
				 	rating = {4}
				 	image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5bY1c4p3QgxC8Veu7JHkkNadhf7pGn8MfGCtsR6XxKeR7dWui_Kt5spg3wPI&usqp=CAc"
			 	/>
			 </div>
			 <div className="home_row">
			 	<Product
				 	id="1234342424"
				 	title = "Stay entertained while you work"
				 	price = {20000}
				 	rating = {4}
				 	image = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQFm7n1tnZcgifr-4sU3mskEuiBm7dQJabsFg&usqp=CAU"
			 	/>
			 </div>
		</div>
	);
}

export default Home;