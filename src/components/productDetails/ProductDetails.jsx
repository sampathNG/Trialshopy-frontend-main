import React, { useState, useEffect, useRef } from 'react';
import ProductDetailsComponent from './ProductDetailsComponent';
import ProductInfo from './ProductInfo';
import SimilarProducts from './SimilarProducts';
import UserReviews from './UserReviews';
import axios from 'axios';
import Loading from '../Loading';

export const ProductDetails = (props) => {
	const { productId } = props;
	const [loading,setLoading] = useState(false);
	const [productData, setProductData] = useState(null);
	const [productReviews, setProductReviews] = useState([]);
	const [similarProducts, setSimilarProducts] = useState([]);
	const [categories, setCategories] = useState(null);

	const serverURL = process.env.BASE_API_URL;
	useEffect(() => {
		const fetchProductData = async () => {
			setLoading(true);
			const apiUrl = `${serverURL}/api/v1/products/${productId}`;
			axios
				.get(`${apiUrl}`)
				.then((response) => {
					// console.log(response.data.features);
					setProductData(response.data);
					// setCategories(response.data.categories);

					const apiUrl3 = `${serverURL}/api/v1/products`;

					axios
						.post(`${apiUrl3}`, {
							filters: { categories: response.data.categories },
						})
						.then((response) => {
							setSimilarProducts(response.data.data);
							console.log('Similar product: ', response.data.data);
						})
						.catch((err) => {
							console.error(err);
						});
					// console.log('categories', categories.current);
				})
				.catch((err) => {
					console.error(err);
				});
		};
 
		// const fetchProductReviews = async () => {
		// 	const apiUrl2 = `${serverURL}/api/v1/reviews/${productId}`;
		// 	axios
		// 		.get(`${apiUrl2}`, { filters: { productId: productId } })
		// 		.then((response) => {
		// 			console.log('reviews', response.data);
		// 			setProductReviews(response.data);
		// 		})
		// 		.catch((err) => {
		// 			console.error(err);
		// 		});

		// 	setLoading(false);
		// };

		// const fetchSimilarProducts = async () => {

		// 	const apiUrl3 = `${serverURL}/api/v1/products`;

		// 	axios
		// 		.post(`${apiUrl3}`, { filters: { categories: categories.current } })
		// 		.then((response) => {
		// 			setSimilarProducts(response.data.data);
		// 			console.log('Similar product: ', response.data.data);
		// 		})
		// 		.catch((err) => {
		// 			console.error(err);
		// 		});
		// };

		fetchProductData();
		// fetchProductReviews();
		// fetchSimilarProducts();
	}, [productId, serverURL]);

	return productData ? (
		<div className="w-full">
			{productData && <ProductDetailsComponent productData={productData} />}

			{productData && <ProductInfo productData={productData} />}
			
			{productReviews && productReviews.length > 0 && (
				<UserReviews reviews={productReviews} />
			)}

			{similarProducts?.length > 0 && (
				<SimilarProducts similarProducts={similarProducts} />
			)}
		</div>
	) : (
		<Loading />
	);
};
