import React from 'react';
import "./CSS/Home.css";
import Product from './Product.js';

function Home() {
	return (
		<div className="home">
			<div className="home_image">
				<p>Soal <br /><span>ECommerce</span></p>
			</div>
			<div className="home_row">
				<Product
					id="1234342424"
					title="Smart Phone "
					price={12000}
					rating={3}
					image1="https://images.squarespace-cdn.com/content/v1/59d2bea58a02c78793a95114/1589398875141-QL8O2W7QS3B4MZPFWHJV/ke17ZwdGBToddI8pDm48kBVDUY_ojHUJPbTAKvjNhBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmmV5_8-bAHr7cY_ioNsJS_wbCc47fY_dUiPbsewqOAk2CqqlDyATm2OxkJ1_5B47U/image-asset.jpeg?format=300w"
					image2="https://cnet3.cbsistatic.com/img/N1EE7TAFTmYtwVHlP38j-PjH8sg=/1200x675/2018/04/10/cdf73dd9-6f29-40e1-adcf-a89e32230120/19-iphone-8-and-iphone-8-plus-productred-special-edition-2018.jpg"
					image3="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQyRpReS_3y_bWzKFPB3o8fjlhyf_Un2t992Q&usqp=CAU"
					image4="https://images-na.ssl-images-amazon.com/images/I/51aE4Bld16L._SL1024_.jpg"
					image5="https://images-na.ssl-images-amazon.com/images/I/617LgamaaHL._SL1024_.jpg"
					point1='Best for playing high graphics games'
					point2='Replacement is not possible'
					point3='With 1 year warranty'
					point4='Easy to carry'
					point5='HD display'
				/>
				<Product
					id="1234342424"
					title="Mi Smart Tv "
					price={36900}
					rating={4}
					image1="https://5.imimg.com/data5/LW/IP/AG/SELLER-47616313/40-smart-4k-ready-led-tv-500x500.jpeg"
					image2="https://images-na.ssl-images-amazon.com/images/I/81-SLwv8vHL._SL1500_.jpg"
					image3="https://images-na.ssl-images-amazon.com/images/I/81HNPJuCtNL._SL1500_.jpg"
					image4="https://images-na.ssl-images-amazon.com/images/I/813ywQrdqTL._SL1500_.jpg"
					image5="https://images-na.ssl-images-amazon.com/images/I/8118uo4lTzL._SL1500_.jpg"
					point1='HD display'
					point2='Replacement is possible'
					point3='size is 28inches'
					point4='with smart facilties'
					point5='with 1 year warranty'
				/>
			</div>

			<div className="home_row">
				<Product
					id="1234342424"
					title="Echo plus (2nd Gen)- Premium Sound "
					price={9999}
					rating={4}
					image1="https://images-na.ssl-images-amazon.com/images/I/61FF8bnIGQL._SL1000_.jpg"
					image2="https://images-na.ssl-images-amazon.com/images/I/61ZJvf5xWBL._SL1000_.jpg"
					image3="https://images-na.ssl-images-amazon.com/images/I/71qtXiAHBbL._SL1000_.jpg"
					image4="https://images-na.ssl-images-amazon.com/images/I/61IPowpWs%2BL._SL1000_.jpg"
					image5="https://images-na.ssl-images-amazon.com/images/I/51APHRysB7L._SL1000_.jpg"
					point1='Premium speaker powered by Dolby '
					point2='360° audio with crisp vocals '
					point3='Comes with a built-in hub to easily setup'
					point4='Easy to carry'
					point5='Just ask Alexa for music'
				/>
				<Product
					id="1234342424"
					title="Sony Smart Camera With Different Lens"
					price={14000}
					rating={4}
					image1="https://rukminim1.flixcart.com/image/416/416/camera/x/d/q/sony-dsc-qx10-lens-style-camera-original-imadpy6dygm5qhfv.jpeg?q=70"
					image2="https://rukminim1.flixcart.com/image/416/416/camera/x/d/q/sony-dsc-qx10-lens-style-camera-original-imadpy6dggfu7h97.jpeg?q=70"
					image3="https://rukminim1.flixcart.com/image/416/416/camera/x/d/q/sony-dsc-qx10-lens-style-camera-original-imadpy6dzpg4znf6.jpeg?q=70"
					image4="https://rukminim1.flixcart.com/image/416/416/camera/x/d/q/sony-dsc-qx10-lens-style-camera-original-imadpy6ddrhctjhy.jpeg?q=70"
					image5="https://rukminim1.flixcart.com/image/416/416/camera/x/d/q/sony-dsc-qx10-lens-style-camera-original-imadpy6dnqvthj7h.jpeg?q=70"
					point1='Effective Pixels: 18 MP'
					point2='Optical Zoom: 10'
					point3='Sensor Type: CMOS'
					point4='Max Shutter Speed: 1/1600'
					point5='Auto Focus'
				/>
				<Product
					id="1234342424"
					title="Nariko 2 Door Wardrobe with 2 Drawers in Wenge Finish "
					price={19000}
					rating={4}
					image1="https://images-na.ssl-images-amazon.com/images/I/71E6%2BiXa-dL._SL1500_.jpg"
					image2="https://images-na.ssl-images-amazon.com/images/I/81fLipjuoSL._SL1500_.jpg"
					image3="https://images-na.ssl-images-amazon.com/images/I/71y7BUZnGAL._SL1500_.jpg"
					image4="https://images-na.ssl-images-amazon.com/images/I/61oErCKf3PL._SL1500_.jpg"
					image5="https://images-na.ssl-images-amazon.com/images/I/61rrnSnWlML._SL1500_.jpg"
					point1='Big and more comfort '
					point2='Constructed from durable metal pipes'
					point3='high quality PP connectors'
					point4='waterproof non-woven fabric tiers'
					point5='this shoe tower will last long'
				/>
			</div>
			<div className="home_row">
				<Product
					id="1234342424"
					title="Stay entertained while you work"
					price={2500}
					rating={4}
					image1="https://images-na.ssl-images-amazon.com/images/I/51pfm1wtAiL._SL1142_.jpg"
					image2="https://images-na.ssl-images-amazon.com/images/I/61ciLSUZDfL._SL1000_.jpg"
					image3="https://images-na.ssl-images-amazon.com/images/I/71IkM1zOUzL._SL1200_.jpg"
					image4="https://images-na.ssl-images-amazon.com/images/I/61zBtv67DhL._SL1000_.jpg"
					image5="https://images-na.ssl-images-amazon.com/images/I/71NkYWK-fqL._SL1194_.jpg"
					point1='100% Bluetooth Functional'
					point2='Sweat & Fall Resistant'
					point3='Long Battery & Instant Recharge'
					point4='Wide Range & Strong Connection'
					point5='Hands-Free Technology'
				/>
			</div>
		</div>
	);
}

export default Home;