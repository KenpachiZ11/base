Первоначальная система продумывания бэка

src/
├── common/
│   ├── filters/
│   │   └── http-exception.filter.ts
│   ├── interceptors/
│   │   └── logging.interceptor.ts
│   ├── decorators/
│   │   └── current-user.decorator.ts
│   └── guards/
│       └── jwt-auth.guard.ts
├── config/
│   ├── database.config.ts
│   ├── logger.config.ts
│   └── app.config.ts
├── database/
│   ├── entities/
│   │   ├── base.entity.ts
│   │   ├── organization.entity.ts
│   │   ├── org-user.entity.ts
│   │   ├── company.entity.ts
│   │   └── company-user.entity.ts
│   └── migrations/
│       └── 1700000000000-InitialMigration.ts
├── modules/
│   ├── organization/
│   │   ├── dto/
│   │   │   ├── create-organization.dto.ts
│   │   │   └── update-organization.dto.ts
│   │   ├── organization.controller.ts
│   │   ├── organization.service.ts
│   │   ├── organization.repository.ts
│   │   └── organization.module.ts
│   ├── company/
│   │   ├── dto/
│   │   │   ├── create-company.dto.ts
│   │   │   └── update-company.dto.ts
│   │   ├── company.controller.ts
│   │   ├── company.service.ts
│   │   ├── company.repository.ts
│   │   └── company.module.ts
│   └── user/
│       ├── dto/
│       │   ├── create-user.dto.ts
│       │   └── update-user.dto.ts
│       ├── user.controller.ts
│       ├── user.service.ts
│       ├── user.repository.ts
│       └── user.module.ts
├── interfaces/
│   ├── base.interface.ts
│   ├── user.interface.ts
│   ├── company.interface.ts
│   └── organization.interface.ts
├── app.module.ts
└── main.ts