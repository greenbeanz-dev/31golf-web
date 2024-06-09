/* eslint-disable */
import type { Prisma, course, customer, manager, Renamedpackage, payment, product, reservation, add_on, company, member, request, transaction, attraction, inclusive, message_history, product_attraction, product_inclusive, product_price, reservation_product, savings_account, Account, Session, User, VerificationToken, reservation_file, fax_history, savings_account_log, product_image, web_setting } from "@prisma/client";
export default interface PrismaTypes {
    course: {
        Name: "course";
        Shape: course;
        Include: Prisma.courseInclude;
        Select: Prisma.courseSelect;
        OrderBy: Prisma.courseOrderByWithRelationInput;
        WhereUnique: Prisma.courseWhereUniqueInput;
        Where: Prisma.courseWhereInput;
        Create: {};
        Update: {};
        RelationName: "product";
        ListRelations: "product";
        Relations: {
            product: {
                Shape: product[];
                Name: "product";
            };
        };
    };
    customer: {
        Name: "customer";
        Shape: customer;
        Include: Prisma.customerInclude;
        Select: Prisma.customerSelect;
        OrderBy: Prisma.customerOrderByWithRelationInput;
        WhereUnique: Prisma.customerWhereUniqueInput;
        Where: Prisma.customerWhereInput;
        Create: {};
        Update: {};
        RelationName: "manager" | "request" | "reservation";
        ListRelations: "request" | "reservation";
        Relations: {
            manager: {
                Shape: manager | null;
                Name: "manager";
            };
            request: {
                Shape: request[];
                Name: "request";
            };
            reservation: {
                Shape: reservation[];
                Name: "reservation";
            };
        };
    };
    manager: {
        Name: "manager";
        Shape: manager;
        Include: Prisma.managerInclude;
        Select: Prisma.managerSelect;
        OrderBy: Prisma.managerOrderByWithRelationInput;
        WhereUnique: Prisma.managerWhereUniqueInput;
        Where: Prisma.managerWhereInput;
        Create: {};
        Update: {};
        RelationName: "customer" | "product" | "request" | "reservation";
        ListRelations: "customer" | "product" | "request" | "reservation";
        Relations: {
            customer: {
                Shape: customer[];
                Name: "customer";
            };
            product: {
                Shape: product[];
                Name: "product";
            };
            request: {
                Shape: request[];
                Name: "request";
            };
            reservation: {
                Shape: reservation[];
                Name: "reservation";
            };
        };
    };
    Renamedpackage: {
        Name: "Renamedpackage";
        Shape: Renamedpackage;
        Include: never;
        Select: Prisma.RenamedpackageSelect;
        OrderBy: Prisma.RenamedpackageOrderByWithRelationInput;
        WhereUnique: Prisma.RenamedpackageWhereUniqueInput;
        Where: Prisma.RenamedpackageWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    payment: {
        Name: "payment";
        Shape: payment;
        Include: Prisma.paymentInclude;
        Select: Prisma.paymentSelect;
        OrderBy: Prisma.paymentOrderByWithRelationInput;
        WhereUnique: Prisma.paymentWhereUniqueInput;
        Where: Prisma.paymentWhereInput;
        Create: {};
        Update: {};
        RelationName: "reservation";
        ListRelations: never;
        Relations: {
            reservation: {
                Shape: reservation | null;
                Name: "reservation";
            };
        };
    };
    product: {
        Name: "product";
        Shape: product;
        Include: Prisma.productInclude;
        Select: Prisma.productSelect;
        OrderBy: Prisma.productOrderByWithRelationInput;
        WhereUnique: Prisma.productWhereUniqueInput;
        Where: Prisma.productWhereInput;
        Create: {};
        Update: {};
        RelationName: "manager" | "course" | "product_attraction" | "product_image" | "product_inclusive" | "product_price" | "request" | "reservation" | "reservation_product";
        ListRelations: "product_attraction" | "product_image" | "product_inclusive" | "product_price" | "request" | "reservation" | "reservation_product";
        Relations: {
            manager: {
                Shape: manager | null;
                Name: "manager";
            };
            course: {
                Shape: course | null;
                Name: "course";
            };
            product_attraction: {
                Shape: product_attraction[];
                Name: "product_attraction";
            };
            product_image: {
                Shape: product_image[];
                Name: "product_image";
            };
            product_inclusive: {
                Shape: product_inclusive[];
                Name: "product_inclusive";
            };
            product_price: {
                Shape: product_price[];
                Name: "product_price";
            };
            request: {
                Shape: request[];
                Name: "request";
            };
            reservation: {
                Shape: reservation[];
                Name: "reservation";
            };
            reservation_product: {
                Shape: reservation_product[];
                Name: "reservation_product";
            };
        };
    };
    reservation: {
        Name: "reservation";
        Shape: reservation;
        Include: Prisma.reservationInclude;
        Select: Prisma.reservationSelect;
        OrderBy: Prisma.reservationOrderByWithRelationInput;
        WhereUnique: Prisma.reservationWhereUniqueInput;
        Where: Prisma.reservationWhereInput;
        Create: {};
        Update: {};
        RelationName: "message_history" | "payment" | "request" | "manager" | "customer" | "product" | "reservation_file" | "reservation_product" | "savings_account" | "transaction";
        ListRelations: "message_history" | "payment" | "request" | "reservation_file" | "reservation_product" | "savings_account" | "transaction";
        Relations: {
            message_history: {
                Shape: message_history[];
                Name: "message_history";
            };
            payment: {
                Shape: payment[];
                Name: "payment";
            };
            request: {
                Shape: request[];
                Name: "request";
            };
            manager: {
                Shape: manager | null;
                Name: "manager";
            };
            customer: {
                Shape: customer | null;
                Name: "customer";
            };
            product: {
                Shape: product | null;
                Name: "product";
            };
            reservation_file: {
                Shape: reservation_file[];
                Name: "reservation_file";
            };
            reservation_product: {
                Shape: reservation_product[];
                Name: "reservation_product";
            };
            savings_account: {
                Shape: savings_account[];
                Name: "savings_account";
            };
            transaction: {
                Shape: transaction[];
                Name: "transaction";
            };
        };
    };
    add_on: {
        Name: "add_on";
        Shape: add_on;
        Include: never;
        Select: Prisma.add_onSelect;
        OrderBy: Prisma.add_onOrderByWithRelationInput;
        WhereUnique: Prisma.add_onWhereUniqueInput;
        Where: Prisma.add_onWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    company: {
        Name: "company";
        Shape: company;
        Include: never;
        Select: Prisma.companySelect;
        OrderBy: Prisma.companyOrderByWithRelationInput;
        WhereUnique: Prisma.companyWhereUniqueInput;
        Where: Prisma.companyWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    member: {
        Name: "member";
        Shape: member;
        Include: never;
        Select: Prisma.memberSelect;
        OrderBy: Prisma.memberOrderByWithRelationInput;
        WhereUnique: Prisma.memberWhereUniqueInput;
        Where: Prisma.memberWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    request: {
        Name: "request";
        Shape: request;
        Include: Prisma.requestInclude;
        Select: Prisma.requestSelect;
        OrderBy: Prisma.requestOrderByWithRelationInput;
        WhereUnique: Prisma.requestWhereUniqueInput;
        Where: Prisma.requestWhereInput;
        Create: {};
        Update: {};
        RelationName: "customer" | "manager" | "product" | "reservation";
        ListRelations: never;
        Relations: {
            customer: {
                Shape: customer | null;
                Name: "customer";
            };
            manager: {
                Shape: manager | null;
                Name: "manager";
            };
            product: {
                Shape: product | null;
                Name: "product";
            };
            reservation: {
                Shape: reservation | null;
                Name: "reservation";
            };
        };
    };
    transaction: {
        Name: "transaction";
        Shape: transaction;
        Include: Prisma.transactionInclude;
        Select: Prisma.transactionSelect;
        OrderBy: Prisma.transactionOrderByWithRelationInput;
        WhereUnique: Prisma.transactionWhereUniqueInput;
        Where: Prisma.transactionWhereInput;
        Create: {};
        Update: {};
        RelationName: "reservation" | "savings_account";
        ListRelations: never;
        Relations: {
            reservation: {
                Shape: reservation | null;
                Name: "reservation";
            };
            savings_account: {
                Shape: savings_account | null;
                Name: "savings_account";
            };
        };
    };
    attraction: {
        Name: "attraction";
        Shape: attraction;
        Include: Prisma.attractionInclude;
        Select: Prisma.attractionSelect;
        OrderBy: Prisma.attractionOrderByWithRelationInput;
        WhereUnique: Prisma.attractionWhereUniqueInput;
        Where: Prisma.attractionWhereInput;
        Create: {};
        Update: {};
        RelationName: "product_attraction";
        ListRelations: "product_attraction";
        Relations: {
            product_attraction: {
                Shape: product_attraction[];
                Name: "product_attraction";
            };
        };
    };
    inclusive: {
        Name: "inclusive";
        Shape: inclusive;
        Include: Prisma.inclusiveInclude;
        Select: Prisma.inclusiveSelect;
        OrderBy: Prisma.inclusiveOrderByWithRelationInput;
        WhereUnique: Prisma.inclusiveWhereUniqueInput;
        Where: Prisma.inclusiveWhereInput;
        Create: {};
        Update: {};
        RelationName: "product_inclusive";
        ListRelations: "product_inclusive";
        Relations: {
            product_inclusive: {
                Shape: product_inclusive[];
                Name: "product_inclusive";
            };
        };
    };
    message_history: {
        Name: "message_history";
        Shape: message_history;
        Include: Prisma.message_historyInclude;
        Select: Prisma.message_historySelect;
        OrderBy: Prisma.message_historyOrderByWithRelationInput;
        WhereUnique: Prisma.message_historyWhereUniqueInput;
        Where: Prisma.message_historyWhereInput;
        Create: {};
        Update: {};
        RelationName: "reservation";
        ListRelations: never;
        Relations: {
            reservation: {
                Shape: reservation | null;
                Name: "reservation";
            };
        };
    };
    product_attraction: {
        Name: "product_attraction";
        Shape: product_attraction;
        Include: Prisma.product_attractionInclude;
        Select: Prisma.product_attractionSelect;
        OrderBy: Prisma.product_attractionOrderByWithRelationInput;
        WhereUnique: Prisma.product_attractionWhereUniqueInput;
        Where: Prisma.product_attractionWhereInput;
        Create: {};
        Update: {};
        RelationName: "attraction" | "product";
        ListRelations: never;
        Relations: {
            attraction: {
                Shape: attraction;
                Name: "attraction";
            };
            product: {
                Shape: product;
                Name: "product";
            };
        };
    };
    product_inclusive: {
        Name: "product_inclusive";
        Shape: product_inclusive;
        Include: Prisma.product_inclusiveInclude;
        Select: Prisma.product_inclusiveSelect;
        OrderBy: Prisma.product_inclusiveOrderByWithRelationInput;
        WhereUnique: Prisma.product_inclusiveWhereUniqueInput;
        Where: Prisma.product_inclusiveWhereInput;
        Create: {};
        Update: {};
        RelationName: "inclusive" | "product";
        ListRelations: never;
        Relations: {
            inclusive: {
                Shape: inclusive;
                Name: "inclusive";
            };
            product: {
                Shape: product;
                Name: "product";
            };
        };
    };
    product_price: {
        Name: "product_price";
        Shape: product_price;
        Include: Prisma.product_priceInclude;
        Select: Prisma.product_priceSelect;
        OrderBy: Prisma.product_priceOrderByWithRelationInput;
        WhereUnique: Prisma.product_priceWhereUniqueInput;
        Where: Prisma.product_priceWhereInput;
        Create: {};
        Update: {};
        RelationName: "product";
        ListRelations: never;
        Relations: {
            product: {
                Shape: product | null;
                Name: "product";
            };
        };
    };
    reservation_product: {
        Name: "reservation_product";
        Shape: reservation_product;
        Include: Prisma.reservation_productInclude;
        Select: Prisma.reservation_productSelect;
        OrderBy: Prisma.reservation_productOrderByWithRelationInput;
        WhereUnique: Prisma.reservation_productWhereUniqueInput;
        Where: Prisma.reservation_productWhereInput;
        Create: {};
        Update: {};
        RelationName: "fax_history" | "product" | "reservation";
        ListRelations: "fax_history";
        Relations: {
            fax_history: {
                Shape: fax_history[];
                Name: "fax_history";
            };
            product: {
                Shape: product | null;
                Name: "product";
            };
            reservation: {
                Shape: reservation | null;
                Name: "reservation";
            };
        };
    };
    savings_account: {
        Name: "savings_account";
        Shape: savings_account;
        Include: Prisma.savings_accountInclude;
        Select: Prisma.savings_accountSelect;
        OrderBy: Prisma.savings_accountOrderByWithRelationInput;
        WhereUnique: Prisma.savings_accountWhereUniqueInput;
        Where: Prisma.savings_accountWhereInput;
        Create: {};
        Update: {};
        RelationName: "reservation" | "transaction";
        ListRelations: "transaction";
        Relations: {
            reservation: {
                Shape: reservation | null;
                Name: "reservation";
            };
            transaction: {
                Shape: transaction[];
                Name: "transaction";
            };
        };
    };
    Account: {
        Name: "Account";
        Shape: Account;
        Include: Prisma.AccountInclude;
        Select: Prisma.AccountSelect;
        OrderBy: Prisma.AccountOrderByWithRelationInput;
        WhereUnique: Prisma.AccountWhereUniqueInput;
        Where: Prisma.AccountWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
            };
        };
    };
    Session: {
        Name: "Session";
        Shape: Session;
        Include: Prisma.SessionInclude;
        Select: Prisma.SessionSelect;
        OrderBy: Prisma.SessionOrderByWithRelationInput;
        WhereUnique: Prisma.SessionWhereUniqueInput;
        Where: Prisma.SessionWhereInput;
        Create: {};
        Update: {};
        RelationName: "user";
        ListRelations: never;
        Relations: {
            user: {
                Shape: User;
                Name: "User";
            };
        };
    };
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        Create: {};
        Update: {};
        RelationName: "accounts" | "sessions";
        ListRelations: "accounts" | "sessions";
        Relations: {
            accounts: {
                Shape: Account[];
                Name: "Account";
            };
            sessions: {
                Shape: Session[];
                Name: "Session";
            };
        };
    };
    VerificationToken: {
        Name: "VerificationToken";
        Shape: VerificationToken;
        Include: never;
        Select: Prisma.VerificationTokenSelect;
        OrderBy: Prisma.VerificationTokenOrderByWithRelationInput;
        WhereUnique: Prisma.VerificationTokenWhereUniqueInput;
        Where: Prisma.VerificationTokenWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    reservation_file: {
        Name: "reservation_file";
        Shape: reservation_file;
        Include: Prisma.reservation_fileInclude;
        Select: Prisma.reservation_fileSelect;
        OrderBy: Prisma.reservation_fileOrderByWithRelationInput;
        WhereUnique: Prisma.reservation_fileWhereUniqueInput;
        Where: Prisma.reservation_fileWhereInput;
        Create: {};
        Update: {};
        RelationName: "reservation";
        ListRelations: never;
        Relations: {
            reservation: {
                Shape: reservation | null;
                Name: "reservation";
            };
        };
    };
    fax_history: {
        Name: "fax_history";
        Shape: fax_history;
        Include: Prisma.fax_historyInclude;
        Select: Prisma.fax_historySelect;
        OrderBy: Prisma.fax_historyOrderByWithRelationInput;
        WhereUnique: Prisma.fax_historyWhereUniqueInput;
        Where: Prisma.fax_historyWhereInput;
        Create: {};
        Update: {};
        RelationName: "reservation_product";
        ListRelations: never;
        Relations: {
            reservation_product: {
                Shape: reservation_product | null;
                Name: "reservation_product";
            };
        };
    };
    savings_account_log: {
        Name: "savings_account_log";
        Shape: savings_account_log;
        Include: never;
        Select: Prisma.savings_account_logSelect;
        OrderBy: Prisma.savings_account_logOrderByWithRelationInput;
        WhereUnique: Prisma.savings_account_logWhereUniqueInput;
        Where: Prisma.savings_account_logWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
    product_image: {
        Name: "product_image";
        Shape: product_image;
        Include: Prisma.product_imageInclude;
        Select: Prisma.product_imageSelect;
        OrderBy: Prisma.product_imageOrderByWithRelationInput;
        WhereUnique: Prisma.product_imageWhereUniqueInput;
        Where: Prisma.product_imageWhereInput;
        Create: {};
        Update: {};
        RelationName: "product";
        ListRelations: never;
        Relations: {
            product: {
                Shape: product;
                Name: "product";
            };
        };
    };
    web_setting: {
        Name: "web_setting";
        Shape: web_setting;
        Include: never;
        Select: Prisma.web_settingSelect;
        OrderBy: Prisma.web_settingOrderByWithRelationInput;
        WhereUnique: Prisma.web_settingWhereUniqueInput;
        Where: Prisma.web_settingWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
}