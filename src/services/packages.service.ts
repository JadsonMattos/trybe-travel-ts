import PackageModel from '../database/models/Package.model';
import { Package } from '../types/Package';
import { ServiceResponse } from '../types/ServiceResponse';

async function update(updatedPackage: Package): Promise<ServiceResponse<Package>> {
  const pkgToUpdate = await PackageModel.findByPk(updatedPackage.id);

  if (!pkgToUpdate) {
    return { status: 'NOT_FOUND', data: { message: 'Pacote não encontrado!' } };
  }

  await PackageModel.update(updatedPackage, { where: { id: updatedPackage.id } });
  const pkgUpdated = await pkgToUpdate.reload();
  return { status: 'SUCCESSFUL', data: pkgUpdated.dataValues };
}

async function exclude(id: number): Promise<ServiceResponse<{ message: string }>> {
  const verifyPkg = await PackageModel.findByPk(id);

  if (!verifyPkg) {
    return { status: 'NOT_FOUND', data: { message: 'Pacote não encontrado!' } };
  }

  await PackageModel.destroy({
    where: { id },
  });

  return { status: 'SUCCESSFUL', data: { message: 'Pacote deletado com sucesso!' } };
}

export default {
  update,
  exclude,
};