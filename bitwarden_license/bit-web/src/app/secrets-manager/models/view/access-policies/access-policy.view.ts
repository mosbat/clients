export class BaseAccessPolicyView {
  id: string;
  read: boolean;
  write: boolean;
  creationDate: string;
  revisionDate: string;
}

export class UserProjectAccessPolicyView extends BaseAccessPolicyView {
  organizationUserId: string;
  organizationUserName: string;
  grantedProjectId: string;
  userId: string;
  currentUser: boolean;
}

export class UserServiceAccountAccessPolicyView extends BaseAccessPolicyView {
  organizationUserId: string;
  organizationUserName: string;
  grantedServiceAccountId: string;
  userId: string;
  currentUser: boolean;
}

export class GroupProjectAccessPolicyView extends BaseAccessPolicyView {
  groupId: string;
  groupName: string;
  grantedProjectId: string;
  currentUserInGroup: boolean;
}

export class GroupServiceAccountAccessPolicyView extends BaseAccessPolicyView {
  groupId: string;
  groupName: string;
  grantedServiceAccountId: string;
  currentUserInGroup: boolean;
}

export class ServiceAccountProjectAccessPolicyView extends BaseAccessPolicyView {
  serviceAccountId: string;
  serviceAccountName: string;
  grantedProjectId: string;
  grantedProjectName: string;
}