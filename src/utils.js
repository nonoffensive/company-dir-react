export function concatSearchString(user) {
  return [
    user.email,
    user.first,
    user.last,
    user.street,
    user.city,
    user.state,
    user.postcode,
    user.country,
    user.phone,
    user.cell
  ]
    .map((str) => {
      return String(str).toLocaleLowerCase();
    })
    .join(" ");
}

export function concatSearchNumber(user) {
  return [user.phone, user.cell]
    .map((str) => {
      return str.replace(/[^0-9]/g, "");
    })
    .join(" ");
}

export function compileUserInfo(user) {
  var data = {
    uuid: user.login.uuid,
    picture: user.picture.large,
    email: user.email,
    first: user.name.first,
    last: user.name.last,
    street: "" + user.location.street.number + " " + user.location.street.name,
    city: user.location.city,
    state: user.location.state,
    postcode: "" + user.location.postcode,
    country: user.location.country,
    phone: "" + user.phone,
    cell: "" + user.cell
  };
  data.searchString = concatSearchString(data);
  return data;
}
