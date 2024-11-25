import { ref } from "vue";
import { storageLocal } from "@pureadmin/utils";
import { responsiveStorageNameSpace } from "@/config";

export const usePlacement = () => {
  const showTagsBreadCrumb =
    ref(
      storageLocal().getItem<StorageConfigs>(
        `${responsiveStorageNameSpace()}configure`
      ).hideBreadCrumb
    ) ?? ref(false);
  const showSearch =
    ref(
      storageLocal().getItem<StorageConfigs>(
        `${responsiveStorageNameSpace()}configure`
      ).hiddenSearch
    ) ?? ref(false);
  const showFullScreen =
    ref(
      storageLocal().getItem<StorageConfigs>(
        `${responsiveStorageNameSpace()}configure`
      ).hideFullScreen
    ) ?? ref(false);
  const showNotice =
    ref(
      storageLocal().getItem<StorageConfigs>(
        `${responsiveStorageNameSpace()}configure`
      ).hideNotice
    ) ?? ref(false);
  const showSetting =
    ref(
      storageLocal().getItem<StorageConfigs>(
        `${responsiveStorageNameSpace()}configure`
      ).hiddenSetting
    ) ?? ref(false);
  return {
    showTagsBreadCrumb,
    showSearch,
    showFullScreen,
    showNotice,
    showSetting
  };
};
