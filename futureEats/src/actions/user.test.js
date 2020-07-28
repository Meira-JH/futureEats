import { setFullAddress, setProfile, signUp } from "../actions/user";
import axios from "axios";

describe("User Actions", () => {
  //-------------------------Sync--------------------
  test("Trás o endereço atualizado da api", () => {
    const mockAddress = "Oi eu sou um endereço";

    const action = setFullAddress(mockAddress);

    expect(action.type).toBe("SET_FULL_ADDRESS");
    expect(action.payload.fullAddress).toBe(mockAddress);
  });
  test("Trás o perfil do usuário atualizado da api", () => {
    const mockPerfil = "Sou um perfil";

    const action = setProfile(mockPerfil);

    expect(action.type).toBe("SET_PROFILE");
    expect(action.payload.user).toBe(mockPerfil);
  });

  test("SignUp", async () => {
    const name = "Chaves";
    const email = "chaves@chaves.com";
    const cpf = "123.123.444-52";
    const password = "123456";
    const mockBody = {
      name,
      email,
      cpf,
      password,
    };

    axios.post = jest.fn(async () => {
      return {
        data: [{ token: "token" }],
      };
    });

    await signUp(name, email, cpf, password)();

    expect(axios.post).toHaveBeenCalledWith(
      "https://us-central1-missao-newton.cloudfunctions.net/futureEats/signup",
      mockBody
    );
  });
});
