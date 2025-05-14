const API = "https://fsa-jwt-practice.herokuapp.com";

async function verify() {
  const token = await signup();
  await authenticate(token);
}

/** Example of a function that sends credentials to an API and receives a token */
async function signup() {
  try {
    const response = await fetch(API + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "lincoln",
        password: "password",
      }),
    });
    const result = await response.json();
    console.log(result, "\n");

    // This will depend on the API you're actually working with
    return result.token;
  } catch (e) {
    console.error("oh no ;(");
  }
}

/** Example of a function that queries a protected resource by attaching a token */
async function authenticate(token) {
  try {
    // In order to attach a token to a request, you have to
    // set the Authorization header of the request headers
    const response = await fetch(API + "/authenticate", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);

    return result;
  } catch (e) {
    console.error(e);
  }
}

verify();
