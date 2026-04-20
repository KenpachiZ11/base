const JSON_PROTO_ORG = {
  id_org: 'b4043d3f-66bb-49a2-8b04-3b42a62f474b',
  name: 'Наименование организации',
  description: 'Описание организации',
  users: ['Пользователи в главной организации'],
  company: ['Список входящих организаций']
};

const JSON_PROTO_COMPANY = {
  id_org: 'b4043d3f-66bb-49a2-8b04-3b42a62f474b',
  data: [
    {
      id_company: '7424214b-231e-4713-a498-35ec104456e7',
      name: 'Наименование входящей организации',
      registry_number: 'Регистрациооный номер',
      industry: 'Индустрия',
      description: 'Описание входящей организации',
      users: ['Пользователи входящие в организацию'],
    }
  ]
};

const JSON_PROTO_ORG_USER = {
  id_org: 'b4043d3f-66bb-49a2-8b04-3b42a62f474b',
  data: [
    {
      id_users: 'b4043d3f-66bb-49a2-8b04-3b42a62f4754',
      name: 'ФИО пользователя',
      phone: 'Телефон пользователя',
      email: 'Почта пользователя',
      position: 'Должность пользователя'
    }
  ]
};

const JSON_PROTO_COMPANY_USER = {
  id_company: '7424214b-231e-4713-a498-35ec104456e7',
  data: [
    {
      id_users: 'b4043d3f-66bb-49a2-8b04-3b42a62f4756',
      name: 'ФИО пользователя',
      phone: 'Телефон пользователя',
      email: 'Почта пользователя',
      position: 'Должность пользователя'
    }
  ]
};