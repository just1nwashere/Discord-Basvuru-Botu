// MADE BY 💖 JUST1N
module.exports = [{
          code: `
          $description[
          # $guildName[$guildID] Başvuru Sistemi

          ## Önnekler Aşağıda Yazmaktadır.


          **- Adın: Just**

          **- Yaşın: 19**

          **- Kaç Sunucuda Yetkili Oldun?: 15**

          **- Bize Neler Katabilirsin?: Herşeyi Yaparım.**

          **- Bize Kaç Davet Yapabilirsin Günlük?: 5**
          ]
          $color[#2f3136]
          $addButton[1;Başvur;success;basvuru;false;🎫]`
},{
          type: "interaction",
          prototype: "button",
          code: `
          $interactionModal[Sunucu Başvuru!;basvuruxd;
                    {actionRow:
                              {textInput:İsmin?:1:nameInput:true:Just:1:200}
                    }
                    {actionRow:
                              {textInput:Yaşın?:1:ageInput:true:18:1:200}
                    }
                    {actionRow:
                              {textInput:Kaç Sunucuda Yetkili Oldun?:2:sunucuInput:true:12:1:200}
                    }
                    {actionRow:
                              {textInput:Bize Neler Katabilirsin?:2:sartInput:true:herşeyi yaparım.:1:200}
                    }
                    {actionRow:
                              {textInput:Bize Kaç Davet Yapabilirsin Günlük?:2:davetInput:true:5:1:200}
                    }
                  ]`
},{
          type: "interaction",
          prototype: "modal",
          code: `
          $interactionReply[**Form Doldurduğunuz İçin Teşekkürler Yetkililer En Kısa Sürede İlgileneceklerdir.**;;;;everyone;true]
          $channelSendMessage[Buraya Kanal İD'si Girin!;
          $title[$username submitted a form!;$userAvatar]
          $addField[İsmi:;$textInputValue[nameInput]]
          $addField[Yaşı:;$textInputValue[ageInput]]
          $addField[TKaç Sunucuda Yetkili Oldun?:;$textInputValue[sunucuInput]]
          $addField[Bize Neler Katabilirsin?:;$textInputValue[sartInput]]
          $addField[Bize Kaç Davet Yapabilirsin Günlük?:;$textInputValue[davetInput]]]`
}];