import React from "react";
import { Document, Page, Text, Image, View } from "@react-pdf/renderer";
import header from './assets/header.png';
import footer from './assets/footer.png';
import table from './assets/table.png';

const DocuPDF = ({ ammount, vmValue, lostIP, cloudType }) => {
  return (
    <Document>
      <Page
      size="A4"
      style={{
        display: "flex",
        flexDirection: "column"
      }}>
        <Image
        src={header}/>
        <View  
        style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
        }}>
          <Text style={{ 
            padding: '0 60px',
            alignItems: "center",
            marginBottom: '5px', 
            color: '#e20046', 
            fontSize: "12px" }}>
            ALCANCE DE SERVICIO PROFESIONAL 
          </Text>
          <Text style={{ 
            padding: '0 60px',
            textAlign: "justify",
            marginBottom: '30px',
            fontSize: "11px" }}> 
            Migración a IPLAN CLOUD
          </Text>
        </View>
        <View  
        style={{
        display: "flex",
        flexDirection: "column"
        }}>
          <Text style={{ 
            padding: '0 60px',
            color: '#e20046',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            DESCRIPCIÓN DEL SERVICIO
          </Text>
          <Text style={{ 
            padding: '0 60px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            Especialistas de IPLAN realizarán la migración según:
          </Text>
          <Text style={{ 
            padding: '0 60px 0 80px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            • Plataforma de Origen: Nube Pública.
          </Text>
          <Text style={{ 
            padding: '0 60px 0 80px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            { `• Plataforma de Destino: ${cloudType}`}
          </Text>
          <Text style={{ 
            padding: '0 60px 0 80px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            • Herramienta empleada: HYSTAX.
          </Text>
          <Text style={{ 
            padding: '0 60px 0 80px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            • Cantidad de VM a Migrar: {ammount ? ammount : '1'}.
          </Text>
        </View>
        <View  
        style={{
        display: "flex",
        flexDirection: "column",
        padding: '20px 0 0 0'
        }}>
          <Text style={{ 
            padding: '0 60px',
            color: '#e20046',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            IMPORTANTE
          </Text>
          <Text style={{ 
            padding: '0 60px 0 80px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            • Los sistemas operativos deberán encontrarse homologados por Hystax y por IPLAN CLOUD.
          </Text>
          { lostIP ? 
          <Text style={{ 
            padding: '0 60px 0 80px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            • Se perderá la IP Pública actual.
          </Text>  : null }
        </View>  
        <View  
        style={{
        display: "flex",
        flexDirection: "column",
        padding: '20px 0 0 0'
        }}>
          <Text 
          style={{ 
            padding: '0 60px',
            color: '#e20046',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            MÁQUINAS VIRTUALES A MIGRAR
          </Text>
          <View
          style={{
            display: "flex",
            flexDirection: "column",
            padding: '5px 60px 0 60px'
          }}>
            <Text
            style={{ 
              backgroundColor: '#393232',
              textAlign: 'center',
              border: '1px solid black',
              fontSize: "10px",
              padding: '3px 0',
              color: '#FFF'
            }}
            >
              VMs
            </Text>
            <Text
            style={{ 
              border: '1px solid black',
              borderTop: 'none',
              marginBottom: '5px',
              fontSize: "10px",
              padding: '3px 0 3px 10px'
            }}>
              { vmValue ? vmValue : 'No hay especificaciones de la VM disponible'}
            </Text>
          </View>
        </View> 
        <View  
        style={{
        display: "flex",
        flexDirection: "column",
        padding: '5px 0 0 0'
        }}>
          <Text style={{ 
            padding: '0 60px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            IMPORTANTE: Se deberá cambiar los Vcpu y GB de RAM de algunas VMs 
            dado que en IPLAN Cloud existen flavor preexistentes.
          </Text>
        </View>
        <View  
        style={{
        display: "flex",
        flexDirection: "column",
        padding: '5px 0 0 0'
        }}>
          <Text 
          style={{ 
            padding: '10px 60px 5px 60px',
            color: '#e20046',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            SISTEMAS OPERATIVOS SOPORTADOS
          </Text>
          <Text style={{ 
            padding: '0 60px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            Para que el presente servicio se pueda realizar los sistemas 
            operativos del CLIENTE en el origen deberán ser compatible con IPLAN CLOUD y HYSTAX.
          </Text>
          <Text style={{ 
            padding: '0 60px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            El CLIENTE deberá verificar la lista cuidadosamente y comprobar que todas sus máquinas virtuales en 
            el origen cumplen con las especificaciones necesarias para ser migradas.
          </Text>
        </View>
        <View  
        style={{
        display: "flex",
        flexDirection: "column"
        }}>
          <Text 
          style={{ 
            padding: '10px 60px 5px 60px',
            color: '#e20046',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            Sistemas operativos compatibles con IPLAN CLOUD y HYSTAX:
          </Text>
          <View  
          style={{
          display: "flex",
          padding: '5px 60px',
          flexDirection: 'row'
          }}>
            <View
            style={{
            display: "flex",
            flexDirection: "column"
            }}>
              <Text
              style={{ 
                backgroundColor: '#e20046',
                border: '1px solid black',
                fontSize: "10px",
                padding: '7px 40px',
                color: '#FFF',
              }}
              >
                Sistema Operativo
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 40px'
              }}>
                Windows Server 2012
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 40px'
              }}>
                Windows Server 2016
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 40px'
              }}>
                Windows Server 2019
              </Text>
            </View>
            <View
            style={{
            display: "flex",
            flexDirection: "column"
            }}>
              <Text
              style={{ 
                backgroundColor: '#e20046',
                border: '1px solid black',
                fontSize: "10px",
                padding: '7px 40px',
                color: '#FFF',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                Tipo
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 40px',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                Standard
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 40px',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                Standard
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 40px',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                Standard
              </Text>
            </View>
            <View
            style={{
              display: "flex",
              flexDirection: "column"
            }}>
              <Text
              style={{ 
                backgroundColor: '#e20046',
                border: '1px solid black',
                fontSize: "10px",
                padding: '7px 40px',
                color: '#FFF',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                Versionado
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 50px',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                R2
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 50px',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                -
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 50px',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                -
              </Text>
            </View>
          </View> 
          <View  
          style={{
          display: "flex",
          padding: '10px 60px 20px 60px',
          flexDirection: 'row'
          }}>
            <View
            style={{
            display: "flex",
            flexDirection: "column"
            }}>
              <Text
              style={{ 
                backgroundColor: '#e20046',
                border: '1px solid black',
                fontSize: "10px",
                padding: '7px 40px',
                color: '#FFF',
              }}
              >
                Sistema Operativo
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 40px',
              }}>
                Linux CentOs 64 Bits
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 40px',
              }}>
                Linux Debian 64 bits
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 40px',
              }}>
                Linux Ubuntu Server 64 Bits
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 40px',
              }}>
                Red Hat Enterprise 64 Bits
              </Text>
            </View>
            <View
            style={{
            display: "flex",
            flexDirection: "column"
            }}>
              <Text
              style={{ 
                backgroundColor: '#e20046',
                border: '1px solid black',
                fontSize: "10px",
                padding: '7px 40px',
                color: '#FFF',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                Tipo
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 30px',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                n/a
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 30px',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                n/a
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 30px',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                n/a
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 30px',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                Enterprise
              </Text>
            </View>
            <View
            style={{
              display: "flex",
              flexDirection: "column"
            }}>
              <Text
              style={{ 
                backgroundColor: '#e20046',
                border: '1px solid black',
                fontSize: "10px",
                padding: '7px 28px',
                color: '#FFF',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                Versionado
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 28px',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                7 - 8
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 28px',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                9 - 10
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 28px',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                16.04 - 18.04
              </Text>
              <Text
              style={{ 
                border: '1px solid black',
                borderTop: 'none',
                fontSize: "10px",
                padding: '3px 28px',
                borderLeft: 'none',
                borderRigth: 'none'
              }}>
                7 - 8 
              </Text>
            </View>
          </View> 
        </View>
        <View  
        style={{
        display: "flex",
        flexDirection: "column"
        }}>
          <Text 
          style={{ 
            padding: '0 60px 5px 60px',
            color: '#e20046',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            Linux kernel support con HYSTAX:
          </Text>
          <Text style={{ 
            padding: '0 60px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            El listado de de kernel soportados se encuentra en
            el siguiente enlace: https://hystax.com/documentation/dr/linux_kernel.html#linux-kernel
          </Text>
        </View>
        <Image
        src={footer}/>
        <Image
        src={header}/>
        <View  
        style={{
        display: "flex",
        flexDirection: "column"
        }}>
          <Text 
          style={{ 
            padding: '10px 60px 5px 60px',
            color: '#e20046',
            fontSize: "10px" }}> 
            TAREAS A REALIZAR SOBRE LAS MÁQUINAS VIRTUALES
          </Text>
          <Image
          style={{
            padding: '20x 60px 40px 60px'
          }}
          src={table}/>
        </View>
        <View  
        style={{
        display: "flex",
        flexDirection: "column"
        }}>
          <Image
          src={header}/>
          <Text 
          style={{ 
            padding: '10px 60px 0 60px',
            color: '#e20046',
            marginBottom: '10px',
            fontSize: "10px" }}> 
            ACLARACIONES
          </Text>
          <Text style={{ 
            padding: '0 60px 0 80px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            • El CLIENTE debe facilitarnos toda la información 
            necesaria para poder realizar la migración correspondiente, 
            IPLAN no se hace responsable por no poder ejecutar la tarea por falta de información.
          </Text>
          <Text style={{ 
            padding: '0 60px 0 80px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            • Las tareas que impliquen corte de servicio, se podrán realizar fuera del horario laboral.
          </Text>
          <Text style={{ 
            padding: '0 60px 0 80px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            • Las tareas que se realicen por fuera del horario laboral, se deberán 
            programar de manera conjunta con al menos 72 hs de anticipación.
          </Text>
          <Text style={{ 
            padding: '0 60px 0 80px',
            marginBottom: '5px',
            fontSize: "10px" }}> 
            • Las máquinas virtuales se podrán migrar solo una vez. Migrar una misma máquina 
            virtual más de una vez implicaría la contratación de servicios profesionales adicionales.
          </Text>
        </View>
        <Image
        style={{
          padding: '590px 0 0 0'
        }}
        src={footer}/>
      </Page>
    </Document>
  );
};

export default DocuPDF;
