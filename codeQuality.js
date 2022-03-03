// level {2}

const getUsers = async () => {
	const doc = await Promise.all(getUser(), getProfile(), getPosts());
	return {
		user: doc[0],
		profile: doc[1],
		posts: doc[2],
	};
};

// level {3}

const getUsers = async (users) =>
	users.map((user, index) => {
		user.id = index;
		return user;
	});
