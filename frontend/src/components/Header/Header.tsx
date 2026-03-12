import React, { useState } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { Icons } from '../../icons/Icons';

import styles from './Header.module.scss';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => setIsModalOpen(true);
  
  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.log('Validate Failed:', error);
    }
  };
  
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  return (
    <div className={styles.wrapper}>
      <span>{title}</span>
      <Icons name={'user'} cb={showModal} />

      <Modal
        title="Авторизация"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Войти"
        cancelText="Отмена"
        okButtonProps={{ 
          htmlType: 'submit'
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="loginForm"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Введите email!' },
              { type: 'email', message: 'Некорректный email!' }
            ]}
          >
            <Input placeholder="example@mail.com" />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Введите пароль!' }]}
          >
            <Input.Password placeholder="Пароль" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
