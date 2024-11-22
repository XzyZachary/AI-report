import { faker } from '@faker-js/faker';
import { verifyAccessToken } from '~/utils/jwt-utils';
import { unAuthorizedResponse } from '~/utils/response';

function generateMockDataList(count: number) {
  const dataList = [];

  for (let i = 0; i < count; i++) {
    const dataItem = {
      id: faker.string.uuid(),
      imageUrl: faker.image.avatar(),
      name: '2024-11-14生成的模版',
      templateName: `模版名称${i}`,
      createTime: new Date(),
      pushCount: i,
      createUser: 'ZZZZZMMMM',
      tags: Array.from({ length: 3 }, () => faker.commerce.productAdjective()),
    };

    dataList.push(dataItem);
  }

  return dataList;
}

const mockData = generateMockDataList(100);

export default eventHandler(async (event) => {
  const userinfo = verifyAccessToken(event);
  if (!userinfo) {
    return unAuthorizedResponse(event);
  }

  await sleep(600);

  const { page, pageSize } = getQuery(event);
  return usePageResponseSuccess(page as string, pageSize as string, mockData);
});
