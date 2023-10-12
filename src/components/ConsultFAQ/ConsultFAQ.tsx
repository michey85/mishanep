import * as React from 'react';

import {
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

const ConsultFAQ = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Подробнее</Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} isFullHeight={true}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Консультации</DrawerHeader>

          <DrawerBody>
            <Text>
              Я предлагаю <strong>получасовые</strong> консультации для всех желающих.
              Вопросы по учебе, трудоустройству, развитию в профессии.
            </Text>
            <Accordion mt={4}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Что входит в консультации
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  На консультациях мы разбираем Ваши вопросы по веб-разработке - верстка,
                  программирование на JavaScript, TypeScript, использование библиотек и
                  фреймворков. Если Вы собираетесь выполнять какой-то проект, то могу
                  подсказать с чего начать, направить. Могу провести code review. Но я не
                  выполняю работу на заказ, тем более тестовые задания при приеме на
                  работу.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Как проходят консультации
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Назначается встреча в Google Meet. Вам на почту приходит ссылка на
                  подключение, в Google Календарь (если вы им пользуетесь) автоматически
                  добавляется слот на консультацию. Google Meet - сервис видео звонков,
                  позволяет делиться экраном. Запись во время консультации не ведется.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      В какое время проходят консультации
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Время консультаций - вечера будних дней (вторник - пятница). Возможные
                  слоты 17:30, 18:30 по центральноевропейскому времени (UTC+1).
                  Продолжительность - 30 минут.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Стоимость консультации
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  30 минутная консультации стоит <strong>2000 рублей</strong> при оплате
                  на российскую карту или <strong>25 евро</strong> при переводе на
                  европейскую карту или PayPal.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Как заказать консультацию
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Пришлите письмо с запросом на консультацию на почту{' '}
                  <strong>
                    <a href="mailto:pcgramota@gmail.com">pcgramota@gmail.com</a>
                  </strong>{' '}
                  с указанием желаемого времени и приблизительным набором тем для
                  обсуждения.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { ConsultFAQ };
