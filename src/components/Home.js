import React from 'react';
import "./CSS/Home.css";
import Product from './Product.js';

function Home(){
	return(
		<div className="home">
			<img 
				 className="home_image"
				 src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/02/AMAZON-1200x537.png"
				 alt=""
			 />

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
				 	title = "Smart Phone "
				 	price = {11.96}
				 	rating = {4}
				 	image = "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1589398875141-QL8O2W7QS3B4MZPFWHJV/ke17ZwdGBToddI8pDm48kBVDUY_ojHUJPbTAKvjNhBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmV5_8-bAHr7cY_ioNsJS_wbCc47fY_dUiPbsewqOAk2CqqlDyATm2OxkJ1_5B47U/image-asset.jpeg?format=300w"
			 	/>
			 	<Product
				 	id="1234342424"
				 	title = "Smart Phone "
				 	price = {11.96}
				 	rating = {5}
				 	image = "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1589398875141-QL8O2W7QS3B4MZPFWHJV/ke17ZwdGBToddI8pDm48kBVDUY_ojHUJPbTAKvjNhBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmV5_8-bAHr7cY_ioNsJS_wbCc47fY_dUiPbsewqOAk2CqqlDyATm2OxkJ1_5B47U/image-asset.jpeg?format=300w"
			 	/>
			 	<Product
				 	id="1234342424"
				 	title = "Smart Phone "
				 	price = {11.96}
				 	rating = {5}
				 	image = "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1589398875141-QL8O2W7QS3B4MZPFWHJV/ke17ZwdGBToddI8pDm48kBVDUY_ojHUJPbTAKvjNhBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmV5_8-bAHr7cY_ioNsJS_wbCc47fY_dUiPbsewqOAk2CqqlDyATm2OxkJ1_5B47U/image-asset.jpeg?format=300w"
			 	/>
			 </div>
			 <div className="home_row">
			 	<Product
				 	id="1234342424"
				 	title = "Smart Phone "
				 	price = {11.96}
				 	rating = {5}
				 	image = "https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1589398875141-QL8O2W7QS3B4MZPFWHJV/ke17ZwdGBToddI8pDm48kBVDUY_ojHUJPbTAKvjNhBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmV5_8-bAHr7cY_ioNsJS_wbCc47fY_dUiPbsewqOAk2CqqlDyATm2OxkJ1_5B47U/image-asset.jpeg?format=300w"
			 	/>
			 </div>
		</div>
	);
}

export default Home;