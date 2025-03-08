
import { Account, Client, ID } from "appwrite";

export class AuthService {
  account;
  client = new Client();

  constructor() {
    this.client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("67cc3ac40039dbf833c6");
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, username }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        username
      );  
      if (userAccount) {
        return await this.loginUser({ email, password });
      } else return userAccount;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.warn("No active session found:", error.message);
      return null; // Return null instead of throwing an error
    }
  }
  

  async loginUser({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async logoutUser() {
    try {
      const session = await this.account.get();
      if (session) return await this.account.deleteSessions(); // if any error comes remove deleteSession(session) and write deleteSessions()
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;