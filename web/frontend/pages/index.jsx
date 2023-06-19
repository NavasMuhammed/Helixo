import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <Page narrowWidth>
      <TitleBar title={t("HomePage.title")} primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <h1>select the badges you want to show below the checkout</h1>
            <div>
              <div>
                <input
                  type="checkbox"
                  id="badge1"
                  name="badge1"
                  value="badge1"
                />
                <label for="badge1">badge1</label>
              </div>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
