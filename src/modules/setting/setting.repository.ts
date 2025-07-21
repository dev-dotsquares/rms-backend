import Setting from './setting.model';

interface CreateSettingDTO {
  restaurant_id?: string | null;
  user_id?: string | null;
  key: string;
  value: string;
}

export class SettingRepository {
  async createSetting(data: CreateSettingDTO) {
    return Setting.create(data);
  }

  async findSettingById(id: string) {
    return Setting.findByPk(id);
  }

  async findSettingByKey(key: string, restaurant_id?: string, user_id?: string) {
    return Setting.findOne({ where: { key, restaurant_id, user_id } });
  }

  async updateSetting(id: string, updates: Partial<CreateSettingDTO>) {
    return Setting.update(updates, { where: { id } });
  }

  async deleteSetting(id: string) {
    return Setting.destroy({ where: { id } });
  }

  async listSettings(filter: Partial<CreateSettingDTO> = {}) {
    return Setting.findAll({ where: filter });
  }
} 