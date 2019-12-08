/* eslint-disable prettier/prettier */
import { Op } from 'sequelize';
import db from '../database/models';

const NotificationService = {
  notify(chat) {
    return db.Notification.create(chat);
  },

  getNotifications(userId, offset, limit) {
    return db.Notification.findAll({
      where: {
        [Op.or]: [
          { ReceiverId: null },
          { ReceiverId: userId },
        ],
      }
    });
  }
};

export default NotificationService;