import Head from 'next/head';



const PageHead: React.FC = () => {

	const metaList = [
		{
			name: 'description',
			content:
				'With Jobpin, Jobpin AI can recommend candidates with millions of jobs online. Recruit ideal candidates for free with the power of AI to recommend.'
		},
		{
			name: 'keywords',
			content:
                'video, jobs, jobpin, career fair, recruitment, carreer'
		},
		{ name: 'referrer', content: 'always' },
		{
			name: 'google-site-verification',
			content: '9bNw2zYmSVCg6wKkor8aNwRbpAad0kPOV5HbusfrojA'
		},
		{
			name: 'baidu-site-verification',
			content: ''
		},
		{
			name: 'robots',
			content: 'index, follow'
		},
		// {
		// 	property: 'og:url',
		// 	content: url
		// },
		{
			property: 'og:title',
			content:
				'Youtube | AI helps you find Jobs, Employment & Career Opportunities'
		},
		{
			property: 'og:site_name',
			content:
				'Jobpin | AI helps you find Jobs, Employment & Career Opportunities'
		},
		{
			property: 'og:type',
			content: 'website'
		},
		{
			property: 'og:description',
			content:
				'With Jobpin, Jobpin AI can recommend candidates with millions of jobs online. Recruit ideal candidates for free with the power of AI to recommend.'
		},
		{
			property: 'twitter:title',
			content:
				'Jobpin | AI helps you find Jobs, Employment & Career Opportunities'
		},
		{
			property: 'twitter:description',
			content:
				'With Jobpin, Jobpin AI can recommend candidates with millions of jobs online. Recruit ideal candidates for free with the power of AI to recommend.'
		},
		{ property: 'twitter:image:src', content: 'Youtube' },
		// { property: 'og:image', content: thumbnailSrc ?? '' },
		// { property: 'og:image:secure_url', content: thumbnailSrc ?? '' }
	];

	return (
		<Head>
			<title>Youtube-home</title>
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			{metaList.map(m => (
				<meta
					name={m.name}
					property={m.property}
					content={m.content}
					key={m.name ?? m.property}
				/>
			))}
		</Head>
	);
};

export default PageHead;
