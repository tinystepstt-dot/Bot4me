const phoneNumber = process.env.PHONE_NUMBER;

      try {
        // Set pairing phone number as bot owner if not already set
        if (!BOT_OWNER) {
          BOT_OWNER = phoneNumber;
          logger.info({ owner: BOT_OWNER }, 'Bot owner auto-detected from pairing');
        }
        
        const code = await sock.requestPairingCode(phoneNumber);
        console.log(`\n✅ Your pairing code: ${code}\nEnter this in WhatsApp to connect`);
      } catch (err) {
        logger.error({ error: err.message }, 'Pairing code error');
      }
