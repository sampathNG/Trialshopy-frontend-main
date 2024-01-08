import React from 'react';
import ReviewCard from './ReviewCard';

const ProductReviews = () => {
	const reviewData = {
		reviewerName: 'Amilia James',
		location: 'New York, USA',
		rating: 4.5,
		description:
			'Equipped with advanced health monitoring features, this smartwatch helps you track your fitness goals and maintain a healthy lifestyle. The built-in heart rate monitor and pedometer accurately measure your heart rate, steps, calories burned, and sleep patterns, providing valuable insights into your overall well-being.',
		images: ['TrouserReview', 'GirlReview', 'ProductReview', 'DressReview'],
	};

	return (
		<div className="my-5">
			<ReviewCard
				reviewerName={reviewData.reviewerName}
				location={reviewData.location}
				rating={reviewData.rating}
				description={reviewData.description}
				images={reviewData.images}
			/>
			<ReviewCard
				reviewerName={reviewData.reviewerName}
				location={reviewData.location}
				rating={reviewData.rating}
				description={reviewData.description}
				images={reviewData.images}
			/>
			<ReviewCard
				reviewerName={reviewData.reviewerName}
				location={reviewData.location}
				rating={reviewData.rating}
				description={reviewData.description}
				images={reviewData.images}
			/>
		</div>
	);
};

export default ProductReviews;
