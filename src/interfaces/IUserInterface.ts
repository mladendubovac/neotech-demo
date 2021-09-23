interface IUserName {
    title: string,
    first: string,
    last: string
}

interface ILocation {
    street: {
        number: number,
        name: string
    },
    city: string,
    state: string,
    country: string,
    postcode: number,
    coordinates: {
        latitude: string,
        longitude: string,
    },
    timezone: {
        offset: string,
        description: string
    }
}

interface ILogin {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string
}

interface IDob {
    date: string,
    age: number
}

interface IRegistered extends IDob {}

interface IId {
    name: string,
    value: string
}

interface IPicture {
    large: string,
    medium: string,
    thumbnail: string
}

export interface IUserInterface {
    gender: string,
    name: IUserName,
    location: ILocation,
    email: string
    login: ILogin,
    dob: IDob,
    registered: IRegistered,
    phone: string
    cell: string,
    id: IId,
    picture: IPicture,
    nat: string
}
