import hasPermissions from '../../extraTs/utils/permissions';

describe('Permissions Checking...', () => {
  describe('Function Checking...', () => {
    it('Function is Available', () => {
      expect(hasPermissions).toBeDefined();
    });
  });

  describe('Modules Checking...', () => {
    const role: string = 'head-trainer';
    const permissionType: string = 'write';

    it('Module "getUsers" exists', () => {
      const moduleName: string = 'getUsers';
      const received: boolean = hasPermissions(moduleName, role, permissionType);

      expect(received).toBeTruthy();
    });

    it('Module "postUsers" does not exists', () => {
      const moduleName: string = 'postUsers';
      const received: boolean = hasPermissions(moduleName, role, permissionType);

      expect(received).toBeFalsy();
    });
  });

  describe('Roles Checking...', () => {
    const moduleName: string = 'getUsers';

    describe('Role "head-trainer" permissions checking...', () => {
      const role: string = 'head-trainer';

      it('Role "head-trainer" have permission to "all" for the "getUsers" module', () => {
        const permissionType: string = 'all';
        const received: boolean = hasPermissions(moduleName, role, permissionType);

        expect(received).toBeTruthy();
      });

      it('Role "head-trainer" have permission to "read" for the "getUsers" module', () => {
        const permissionType: string = 'read';
        const received: boolean = hasPermissions(moduleName, role, permissionType);

        expect(received).toBeTruthy();
      });

      it('Role "head-trainer" have permission to "write" for the "getUsers" module', () => {
        const permissionType: string = 'write';
        const received: boolean = hasPermissions(moduleName, role, permissionType);

        expect(received).toBeTruthy();
      });

      it('Role "head-trainer" have permission to "delete" for the "getUsers" module', () => {
        const permissionType: string = 'delete';
        const received: boolean = hasPermissions(moduleName, role, permissionType);

        expect(received).toBeTruthy();
      });
    });

    describe('Role "trainer" permissions checking...', () => {
      const role: string = 'trainer';

      it('Role "trainer" do not have permission to "all" for the "getUsers" module', () => {
        const permissionType: string = 'all';
        const received: boolean = hasPermissions(moduleName, role, permissionType);

        expect(received).toBeFalsy();
      });

      it('Role "trainer" have permission to "read" for the "getUsers" module', () => {
        const permissionType: string = 'read';
        const received: boolean = hasPermissions(moduleName, role, permissionType);

        expect(received).toBeTruthy();
      });

      it('Role "trainer" have permission to "write" for the "getUsers" module', () => {
        const permissionType: string = 'write';
        const received: boolean = hasPermissions(moduleName, role, permissionType);

        expect(received).toBeTruthy();
      });

      it('Role "trainer" do not have permission to "delete" for the "getUsers" module', () => {
        const permissionType: string = 'delete';
        const received: boolean = hasPermissions(moduleName, role, permissionType);

        expect(received).toBeFalsy();
      });
    });

    describe('Role "trainee" permissions checking...', () => {
      const role: string = 'trainee';

      it('Role "trainee" do not have permission to "all" for the "getUsers" module', () => {
        const permissionType: string = 'all';
        const received: boolean = hasPermissions(moduleName, role, permissionType);

        expect(received).toBeFalsy();
      });

      it('Role "trainee" have permission to "read" for the "getUsers" module', () => {
        const permissionType: string = 'read';
        const received: boolean = hasPermissions(moduleName, role, permissionType);

        expect(received).toBeTruthy();
      });

      it('Role "trainee" do not have permission to "write" for the "getUsers" module', () => {
        const permissionType: string = 'write';
        const received: boolean = hasPermissions(moduleName, role, permissionType);

        expect(received).toBeFalsy();
      });

      it('Role "trainee" do not have permission to "delete" for the "getUsers" module', () => {
        const permissionType: string = 'delete';
        const received: boolean = hasPermissions(moduleName, role, permissionType);

        expect(received).toBeFalsy();
      });
    });
  });
});
