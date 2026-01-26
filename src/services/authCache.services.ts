import AsyncStorage from "@react-native-async-storage/async-storage";

export class AuthCache {
  static readonly tokenKey = "@token";

  static async saveToken(token: string) {
    await AsyncStorage.setItem(this.tokenKey, token);
  }

  static async getToken() {
    return await AsyncStorage.getItem(this.tokenKey);
  }

  static async removeToken() {
    await AsyncStorage.removeItem(this.tokenKey);
  }
}
