// level {2}

const getUsers = async () => {
	const getData = async () => {
		await getUser();
		await getProfile();
		await getPosts();
	};

	const doc = await getData();

	const userProfile = {
		user: doc[0],
		profile: doc[1],
		posts: doc[2],
	};

	return userProfile;
};
