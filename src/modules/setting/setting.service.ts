import { SettingRepository } from './setting.repository';

export class SettingService {
  private settingRepo = new SettingRepository();

  async getAllSettings() {
    return this.settingRepo.listSettings();
  }

  async createSetting(data: {
    restaurant_id?: string | null;
    user_id?: string | null;
    key: string;
    value: string;
  }) {
    return this.settingRepo.createSetting(data);
  }
}

export default new SettingService(); 