async function isUserLoggedIn(userID: string) {
    console.log(userID);
    return true;
}

type UserLoginResponse = Awaited<ReturnType<typeof isUserLoggedIn>>;