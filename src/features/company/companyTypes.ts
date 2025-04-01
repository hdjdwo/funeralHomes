export interface Company {
  id: string;
  contactId: string;
  name: string;
  shortName: string;
  businessEntity: string;
  contract: {
    no: string;
    issue_date: string;
  };
  type: string[];
  status: "active" | "inactive";
  photos: Photo[];
  createdAt: string;
  updatedAt: string;
}

export interface Contact {
  id: string;
  lastname: string;
  firstname: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}


export interface Photo {
  name: string;
  filepath: string;
  thumbpath: string;
  createdAt: string;
}

// Тип для обновления компании
export type CompanyUpdateData = Partial<
  Pick<Company, "name" | "shortName" | "businessEntity" | "type" | "status"> & {
    contract: Partial<Company["contract"]>;
  }
>;

// Тип для обновления контакта
export type ContactUpdateData = Partial<
  Pick<Contact, "lastname" | "firstname" | "phone" | "email">
>;